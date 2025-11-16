import { useParams } from 'react-router-dom';

function Person () {

    const {name} = useParams();

    return (
    <>
    <p>person: {name}</p>
    </>
    );
}

export default Person;