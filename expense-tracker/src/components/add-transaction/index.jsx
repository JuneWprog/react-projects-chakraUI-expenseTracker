import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, handleFormSubmit } = useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleFormSubmit(formData);
    
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup
              mt="5"
              name="type"
              value={formData.type}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, type: value }))
              }
            >
              <Radio
                checked={formData.type === "income"}
                value="income"
                colorScheme="blue"
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                value="expense"
                colorScheme="red"
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
