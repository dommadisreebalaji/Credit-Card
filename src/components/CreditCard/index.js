// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CreditCardContainer,
  CreditCardHeading,
  CardContainer,
  CardNumberInput,
  CardHolderNameDescription,
  CardNameInput,
  PaymentMethodContainer,
  PaymentMethodHeading,
  PaymentCard,
  PaymentCardNumberInput,
} from './styledComponents'

const CreditCard = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [creditCardName, setCreditCardName] = useState('')
  const onChangeNumber = event => {
    setCreditCardNumber(event.target.value)
  }
  const onChangeName = event => {
    setCreditCardName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CardContainer data-testid="creditCard">
          <CardNumberInput>{creditCardNumber}</CardNumberInput>
          <CardHolderNameDescription>CARDHOLDER NAME</CardHolderNameDescription>
          <CardNameInput>{creditCardName}</CardNameInput>
        </CardContainer>
      </CreditCardContainer>
      <PaymentMethodContainer>
        <PaymentCard>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <PaymentCardNumberInput
            type="text"
            value={creditCardNumber}
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <PaymentCardNumberInput
            type="text"
            value={creditCardName}
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentCard>
      </PaymentMethodContainer>
    </AppContainer>
  )
}

export default CreditCard
