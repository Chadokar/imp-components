import styled from "styled-components";

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  /* Hide the default checkbox */
  display: none;

  /* Custom checkbox style */
  & + label::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border: 2px solid #999999;
    border-radius: 3px;
    background-color: #ffffff;
  }

  /* Custom checkbox checked style */
  &:checked + label::before {
    background-color: #2196f3;
  }
`;

export const CheckboxLabel = styled.label`
  /* Add your custom label styles here */
`;

// Example usage:
function MyComponent() {
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" />
      Check me!
    </CheckboxLabel>
  );
}

export default MyComponent;
