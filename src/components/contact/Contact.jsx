import React from "react";
import "./contact.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";



const StyledTextarea = styled(TextareaAutosize)({
    resize: 'none',
    border: 'none', // remove the native textarea border
    minWidth: 0, // remove the native textarea width
    outline: 0, // remove the native textarea outline
    padding: 0, // remove the native textarea padding
    paddingBlockStart: '1em',
    paddingInlineEnd: `var(--Textarea-paddingInline)`,
    flex: 'auto',
    alignSelf: 'stretch',
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    '&::placeholder': {
        opacity: 0,
        transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
        opacity: 1,
    },
    // specific to TextareaAutosize, cannot use '&:focus ~ label'
    '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
        top: '0.5rem',
        fontSize: '0.75rem',
    },
    '&:focus + textarea + label': {
        color: '#15161a',
    },
});

const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Textarea-minHeight) - 1em) / 2)',
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerTextarea = React.forwardRef(function InnerTextarea(props, ref) {
    const id = React.useId();
    return (
        <React.Fragment>
            <StyledTextarea minRows={5} {...props} ref={ref} id={id} />
            <StyledLabel htmlFor={id}>Message</StyledLabel>
        </React.Fragment>
    );
});
export default function () {

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    function sxObject() {
        return {
            '& .MuiInputBase-input': {
                color: 'var(--primary-color)', // Change the input text color
                backgroundColor: 'var(--secondary--color)', // Background color
                borderRadius: '5px', // Border radius
            },
            '& .MuiInputLabel-root': {
                color: '#636B74', // Label color
                fontWeight: 600, // Font weight for label
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: 'var(--primary-color)', // Label color when focused
            },
            '& .MuiFormHelperText-root': {
                color: 'orange', // Helper text color
            },
            mb: 2, // Adds margin-bottom
        }
    }

    return (
        <motion.div className="contact-section"
            initial={{ opacity: 0 }} // Starting position (hidden and below viewport)
            whileInView={{ opacity: 1 }} // Animate to visible and move up
            transition={{ duration: 1 }} // Animation duration
            viewport={{ once: true }} // Trigger animation only once when it enters viewport
        >
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="contact-info-container">
                        <div className="contact-info-intro">
                            <p className="contact-intro-p">Contact Me</p>
                            <h3 className="contact-intro-h3">Let's Connect & <br /> Collaborate</h3>
                        </div>
                        <div className="contact-info-details">
                            <div>
                                <PhoneIcon />
                                <p>+201070304299</p>
                            </div>
                            <div>
                                <EmailIcon />
                                <p><a href="mailto:marwantahaa@outlook.com">marwantahaa@outlook.com</a></p>
                            </div>
                            <div>
                                <TelegramIcon />
                                <p>@itsmervie</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form" noValidate="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                            <TextField {...register("name", { required: true })} id="outlined-basic" label="Name" variant="filled" className="form-input" />

                            <TextField {...register("email", { required: true })} id="outlined-basic" label="Email" variant="filled" className="form-input" />

                            <TextField
                                {...register("message", { required: true })}
                                id="filled-multiline-static"

                                label="Message"
                                multiline
                                rows={4} // Set the number of rows for the message field
                                variant="filled"
                                className="form-input"
                            />

                            <Button type="submit" className="custom-button" variant="outlined">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}