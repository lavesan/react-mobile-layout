import styled, { css } from 'styled-components'

const StyledMobileView = styled.div`
  ${({ colors, height, width, headerWidth }) => css`
    width: ${width}px;
    height: ${height}px;
    border: thin solid ${colors.secondary};
    border-radius: ${width / 10}px;
    overflow: hidden;
    position: relative;
    background-color: ${colors.primary};
    display: flex;
    flex-flow: column wrap;

    .top-border {
      height: ${width / 20}px;
      width: 100%;
      background-color: ${colors.primary};
      position: relative;

      .top-border--opts {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: ${width / 20}px;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: ${headerWidth / 6}px;
        width: 50%;
        background-color: ${colors.primary};
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      .top-border--cam {
        border-radius: 50%;
        background-color: ${colors.cam};
        width: ${headerWidth / 10}px;
        height: ${headerWidth / 10}px;
        margin-right: 10px;
      }

      .top-border--mic {
        background-color: ${colors.secondary};
        width: ${headerWidth / 6}px;
        height: ${headerWidth / 18}px;
        border-radius: 5px;
      }
    }

    .screen {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      flex: 1;

      .screen--left-border, .screen--right-border {
        background-color: ${colors.primary};
        width: ${width / 20}px;
        height: 100%;
      }

      .screen--center {
        border: thin solid ${colors.secondary};
        border-radius: ${width / 16}px;
        width: 100%;
        background-color: ${colors.screen};
      }
    }

    .remote {
      height: ${width / 20}px;
      background-color: ${colors.primary};
      width: 100%;
    }
  `}
`

export default StyledMobileView;
