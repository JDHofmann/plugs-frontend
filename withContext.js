import Context from "./Context";

// this component wraps around items that require context
// appending our context to a wrapped component’s props.

// withContext takes in a React Component as a parameter
const withContext = WrappedComponent => {
    const WithHOC = props => {
        return (
            <Context.Consumer>
                {context => <WrappedComponent {...props} context={context} />}
            </Context.Consumer>
        )
    }
    return WithHOC;
}
export default withContext;