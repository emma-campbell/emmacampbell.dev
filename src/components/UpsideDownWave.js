import React from "react"
import styled from "styled-components"

const StyledWave = styled.div`
  position: relative;
  padding-top: 0;
`

const UpsideDownWave = () => {
  return (
    <StyledWave>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#273036" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,37.3C384,21,480,11,576,53.3C672,96,768,192,864,218.7C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </StyledWave>
  )
}

export default UpsideDownWave
