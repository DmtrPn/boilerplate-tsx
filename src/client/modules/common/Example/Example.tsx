import * as React from 'react';

import * as style from './Example.css';

export interface ExampleProps {
}

interface ExampleComponentProps extends ExampleProps {
}

export const Example = (
    {}: ExampleComponentProps): JSX.Element => {
    return (
        <div className={style.root}>
        </div>
    );
};
