// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'

export const CourseDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 60px;
`

export const ImageContainer = styled.div`
  display: flex;
  width: 35%;
`
export const Image = styled.img`
  width: 100%;
  height: 400px;
`

export const NameAndDescriptionContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #1e293b;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #64748b;
  line-height: 1.5;
  word-spacing: 3px;
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
