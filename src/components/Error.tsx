import React, {FC} from 'react';

interface ErrorMessageProps {
    error: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({error}) => {
    return (
        <p className='text-center text-red-600'>{error}</p>
    );
};

export default ErrorMessage;