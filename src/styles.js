import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Content = styled.div`
  background-color: #111;
  width: 360px;
  max-width: 92vw;
  min-height: 520px;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);

`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

`