import { LoadingButton } from "@mui/lab";

const AddButton = ({ children, ...props }) => {
    return (
        <LoadingButton
            variant="contained"
            color="primary"
            {...props}
        >
            {children}
        </LoadingButton>
    );
};

export default AddButton;