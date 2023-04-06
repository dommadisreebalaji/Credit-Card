// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
`
export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  padding: 25px;
`

export const CreditCardHeading = styled.h1`
  margin-top: 25px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  color: #ffffff;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50%;
  width: 100%;
  background-size: cover;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 100px;
`

export const CardNumberInput = styled.p`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 120px;
  text-align: left;
  margin-left: 50px;
`
export const CardNameInput = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 120px;
  text-align: left;
  margin-left: 50px;
  margin-top: 30px;
`
export const CardHolderNameDescription = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  color: #ffffff;
  text-align: left;
  margin-left: 50px;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`
export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
`
export const PaymentMethodHeading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
`

export const PaymentCardNumberInput = styled.input`
  background-color: transparent;
  margin-top: 10px;
  padding-left: 10px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  border: 1px solid #c3cad9;
  width: 200px;
  outline: none;
`
