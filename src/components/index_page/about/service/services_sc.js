import styled from 'styled-components';
import { mainGreay, primaryColor } from '../../../../layout/layout.scss'

const Wrapper = styled.section`
  background: ${mainGreay};
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;

    .service {
      margin: 2rem 0;
      text-align: center;

      span {
        background: ${primaryColor};
        padding: 0.5rem;
        display: inline-block;
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      h4 {
        text-transform: uppercase;
      }
    }
  }
`

export default Wrapper;