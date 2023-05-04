import styled from 'styled-components';

export const StyledCard = styled.div`
  .container {
    background-color: white;
  }

  .wrapper {
    display: none;
  }

  .desc {
    text-align: center;
    color: white;
    font-size: 18px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  form div input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    outline: none;
    border: 2px solid #c4c4c4;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding-left: 2rem;
  }

  form div {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input:focus {
    border: 2px solid #f2796e;
  }

  .btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
  }

  .btn-1,
  .btn-2 {
    padding: 10px 5px;
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    border: 2px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .btn-2 {
    background-color: #4f70b5;
    color: white;
  }

  .social-or {
    text-align: center;
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .img-question {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  span {
    color: #f2796e;
    cursor: pointer;
  }

  form i {
    position: absolute;
    padding: 12px;
  }

  .social {
    margin: 2rem;
  }

  button {
    margin-top: 15px;
    width: 100%;
    height: 45px;
    background-color: #f2796e;
    border: 2px solid #f2796e;
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
    margin-bottom: 2rem;
  }

  button:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .container {
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .wrapper_all {
      display: flex;
      width: 1024px;
      background-color: white;
      border-radius: 5px;
      border: 2px solid #f2796e;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      background-color: #f2796e;
      width: 50%;
      padding: 1rem 2rem 1rem 2rem;
    }

    .social {
      width: 50%;
      padding-left: 3rem;
      padding-right: 3rem;
      margin: auto;
    }

    form,
    .content {
      width: 100%;
    }

    .btn {
      flex-direction: row;
    }
  }
`;
