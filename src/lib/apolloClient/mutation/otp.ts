import { gql } from "@apollo/client";

export const GENERATE_OTP_MUTATION = gql`
  mutation generateOtp($phone: String!) {
    generateOtp(phone: $phone) {
      message
    }
  }
`;

export const VERIFY_OTP_MUTATION = gql`
  mutation verifyOtp($phone: String!, $otp: String!) {
    verifyOtp(phone: $phone, otp: $otp) {
      message
    }
  }
`;