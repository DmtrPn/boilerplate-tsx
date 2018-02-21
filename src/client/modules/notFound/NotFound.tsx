import * as React from 'react';

import * as style from './NotFound.css';
import { Page } from '../common/Page';

export const NotFound = () => (
        <Page>
            <div className={style.root}>
                <span className={style.code}>404</span>
                <span className={style.message}>Страница не найдена.</span>
            </div>
        </Page>
    );