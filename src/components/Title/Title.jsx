
import styled, { css } from "styled-components";

const Title = ({title}) => {
    const Title = styled.h1`
    color: #333;
    font-size: 40px;
    `;

  return (
    <Title>
        {title}
    </Title>
  )
}

export default Title