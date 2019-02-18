import * as React from 'react';
import './MyTestComponent.less';

class MyTestComponent extends React.Component {
    render(): React.ReactNode {
        return <div className='test'>
            hello world
        </div>;
    }
}

export default MyTestComponent;