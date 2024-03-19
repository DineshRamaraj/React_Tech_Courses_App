/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
`

export const CourseHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #1e293b;
`

export const CourseListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const CourseItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 20%;
  margin-bottom: 30px;
`

export const CourseItemImage = styled.img`
  width: 60px;
  height: 60px;
`

export const CourseItemHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
  margin-left: 20px;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

export const FailureImage = styled.img`
  width: 60%;
  max-width: 500px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #1e293b;
  margin-bottom: 5px;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #64748b;
  margin: 10px 0;
`

export const FailureRetryButton = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #4656a1;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  cursor: pointer;
  margin-top: 10px;
`
