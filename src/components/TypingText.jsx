import { Typewriter } from 'react-simple-typewriter';

function TypingText( { firstText = '', secondTextArray = [ 'a Developer' ] } ) {
    return (
        <div>
            {firstText}{' '}
            <span style={{ color: 'tomato', fontWeight: 'bold' }}>
                <Typewriter
                words={ secondTextArray }
                loop={99}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                />
            </span>
        </div>
    );
}

export default TypingText;