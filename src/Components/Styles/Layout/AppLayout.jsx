const AppLayout = () => (WrappedComponent) => {
    const WrappedComponentWithLayout = (props) => {
      return (
        <div>
          <div>
            Header
          </div>
          <WrappedComponent {...props}></WrappedComponent>
          <div>Footer</div>
        </div>
      );
    };

    // Assign a display name to the component returned by the HOC
    WrappedComponentWithLayout.displayName = `AppLayout(${getDisplayName(WrappedComponent)})`;

    return WrappedComponentWithLayout;
};

// Utility function to get the display name of a component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default AppLayout;
