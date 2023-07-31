import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Homepage from './Homepage';

export default function HomePagesWithGender() {
        // Use the useParams hook to get the URL parameters
        const { gender } = useParams();

        useEffect(() => {
          console.log('Filter received:', gender);
          document.title = 'Hype - Products';
        }, [gender]);


  return (
    <Homepage gender={gender}></Homepage>
  )
}
