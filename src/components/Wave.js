import React from "react"
import styled from "styled-components"

import Arrow from "../images/down-arrow.svg"

const StyledWave = styled.div`
  position: relative;
  padding-top: 0;
  margin-top: 0;
`

const Wave = () => {
  return (
    <StyledWave>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,288L34.3,282.7C68.6,277,137,267,206,224C274.3,181,343,107,411,117.3C480,128,549,224,617,261.3C685.7,299,754,277,823,245.3C891.4,213,960,171,1029,160C1097.1,149,1166,171,1234,154.7C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </StyledWave>
  )
}

export default Wave
