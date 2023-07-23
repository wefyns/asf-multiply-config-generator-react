import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  text-align: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.config.background};
`;

export const FormContainer = styled.div`
  display: flex;
  margin-top: 96px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  gap: 16px;
  display: flex;
  padding: 32px;
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.config.text.primary};
`;

export const SectionContainer = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  display: flex;
  width: 328px;
  height: 52px;
  padding: 14px 16px 14px 20px;
  color: ${({ theme }) => theme.config.text.primary};

  border-width: 0px;
  flex-shrink: 0;

  border-radius: 26px;
  background: ${({ theme }) => theme.config.input.bg};
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.config.text.primary};
`;

export const FileInputContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CustomFileInput = styled.label`
  height: 40px;
  border: none;
  color: ${({ theme }) => theme.config.text.primary};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  box-shadow: 0px 3px 8px 0px ${({ theme }) => theme.config.shadow.primary};
  background: ${({ theme }) => theme.config.input.bg};

  &:hover {
    background: ${({ theme }) => theme.config.input.dark.background};
  }
`;

export const InvisibleFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const Button = styled.button`
  gap: 10px;
  height: 48px;
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  padding: 12px 24px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  background-color: #232627;
  color: ${({ theme }) => theme.config.button.text};

  border-radius: 24px;
  background: #22a913;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    border-radius: 24px;
    border: 1px solid #343839;
    background: #22a913;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
  }

  &:active {
    border-radius: 24px;
    border: 1px solid #343839;
    background: #22a913;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const LinkButton = styled.a`
  border: none;
  flex-shrink: 0;
  cursor: pointer;
  padding: 0px 24px;
  align-items: center;
  align-self: flex-end;
  text-decoration: none;
  justify-content: center;
  color: ${({ theme }) => theme.config.text.primary};

  border-radius: 24px;

  &:hover {
    border-radius: 24px;
  }

  &:active {
    border-radius: 24px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  font-size: 16px;
  margin-top: 20px;
  align-items: center;
  color: ${({ theme }) => theme.config.text.primary};
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const ButtonsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
