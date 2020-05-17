import React from 'react';
import { Spinner } from 'reactstrap';

function Index(props) {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
        </div>
    );
}

export default Index;