import styled from 'styled-components'
import { slideRight, slideBottom, slideLeft } from '../Animation'
import Image from 'next/image'

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => ({ alternativeColor }) =>
    alternativeColor
      ? props.theme.contentColorAlternative
      : props.theme.contentColor};
  position: relative;
  z-index: 0;
  width: 100%;
  overflow-x: hidden;
`

export const ContentWrapper = styled.div`
  /* background: red; */
  display: flex;
  z-index: 1;
  height: 710px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: inline;
  }
`

export const ContentRow = styled.div`
  /* background: orange; */
  width: 95%;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col2  col1 col1'` : `'col1 col1 col2 col2 '`};

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
// ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};

export const Column1 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  /* margin: ${({ imgStart }) => (imgStart ? '0 0 0 40px' : '0 40px 0 0')}; */

  grid-area: col1;

  @media screen and (max-width: 850px) {
    order: ${({ imgStart }) => (imgStart ? '1' : '2')};
  }

  @media screen and (max-width: 480px) {
    order: ${({ imgStart }) => (imgStart ? '1' : '2')};
  }
`

export const Column2 = styled.div`
  /* background: green; */
  /* height: inherit; */
  /* width: 100%; */
  /* height: 100%; */
  /* margin: ${({ imgStart }) => (imgStart ? '0 40px 0 0' : '0 0 0 40px')}; */
  margin-bottom: 15px;
  margin-top: 25px;
  padding: 0 15px;
  display: flex;
  justify-content: ${({ presentation }) =>
    presentation ? 'flex-end' : 'center'};
  grid-area: col2;

  @media screen and (max-width: 850px) {
    justify-content: center;
    align-items: center;
    /* height: 75%; */
    /* max-height: 300px; */
  }
`

export const ImgWrap = styled.div`
  max-width: 550px;
  height: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  /* @media screen and (max-width: 480px) {
    padding: 10px;
  } */
`

export const ImageComp = styled(Image)`
  /* height: 100%;
  width: auto; */
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: ${({ presentation }) => (presentation ? '50%' : '0px')};
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.529);
  /* @media screen and (max-width: 768px) {
    margin: 0;
  } */
`
