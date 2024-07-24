import { Box, TextField, Stack, Button } from "@mui/material";
import ModalWrapper from "./ModalWrapper";

export default function ExamModal({setIsOpen, mutation}) {

    function handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		const formData = new FormData(e.target);

		const parsed = {
			name: formData.get("name"),
			description: formData.get("description"),
		};
		mutation.mutate(parsed);
	}

    return (<ModalWrapper>
        {(setOpen) => {
            return (
                <Box>
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                            setOpen(false);
                            setIsOpen(false);
                        }}
                    >
                        <TextField name="name" label="Name" variant="filled" />
                        <TextField name="description" label="Description" variant="filled" />
                        <Stack spacing={2} direction="row">
                            <Button
                                variant="text"
                                onClick={() => {
                                    setOpen(false);
                                    setIsOpen(false);
                                }}
                            >
                                Close
                            </Button>
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Box>
            );
        }}
    </ModalWrapper>
    )
}