import React from 'react';
import { FlexBox } from '../../styles';



export class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
    
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
   reset = (e:  React.FormEvent) => {
    e.preventDefault();
    this.setState({hasError: false})
  }
    render() {

      if (this.state.hasError) {
        // You can render any custom fallback UI
        return( 
            <FlexBox height='100vh' width='100vw' justifyContent='center' alignItems='center'>
                <p>Some error occurred</p>
                <button onClick={this.reset}>Reset</button>
            </FlexBox>
        );
      }
  
      return this.props.children; 
    }
  }
  

export default ErrorBoundary;