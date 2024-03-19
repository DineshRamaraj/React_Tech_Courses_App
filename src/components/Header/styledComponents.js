/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  padding-left: 30px;
  height: 80px;
  background-color: #f1f5f9;
  align-items: center;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const HeaderImage = styled.img`
  width: 120px;
  height: 40px;
  margin-left: 30px;
  cursor: pointer;
`
