import React from 'react'
import styled from "styled-components"

const ListMenu = ({listMenu}) => {

    const ListMenu = styled.h2`
    font-size: 2rem;
    `;

  return (
    <ListMenu>{listMenu}</ListMenu>
  )
}

export default ListMenu
