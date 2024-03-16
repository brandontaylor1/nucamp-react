export const validateCommentForm = (values) => {
    const errors = {}; 
    if(!values.rating) {
        errors.rating = 'Required';
    }

    if (values.author.length < 2) {
        errors.author = "Author's name must be at least 2 characters long";
    } else if (values.author.length > 15) {
        errors.author = "Author's name must be less than 15 characters.";
    }

    return errors
}   