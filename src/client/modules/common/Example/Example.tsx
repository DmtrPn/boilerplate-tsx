import * as React from 'react';

import * as style from './Example.scss';

export interface ExampleProps {
}

interface Props extends ExampleProps {
}

export const Example = ({}: Props): JSX.Element => {
    return (
        <div className={style.root}>
        </div>
    );
};
