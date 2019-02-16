import * as React from 'react';
import './MyTestComponent.less';

class MyTextComponent extends React.Component {
    render(): React.ReactNode {
        return <div className='test'>
            hello
        </div>;
    }
}

export default MyTextComponent;