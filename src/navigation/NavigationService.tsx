import { CommonActions, DrawerActions, NavigationContainerRef } from '@react-navigation/native';

//declare the navigation functions that will be needed
let _navigator: NavigationContainerRef<ReactNavigation.RootParamList> | null;

function setTopLevelNavigator(navigatorRef: NavigationContainerRef<ReactNavigation.RootParamList> | null) {
    _navigator = navigatorRef;
}

//navigate from a screen to another and send params option
function navigate(routeName: string, params?: object) {
    _navigator?.dispatch(
        CommonActions.navigate(routeName, params)
    );
}
//navigate back from a screen to another 
function goBack() {
    _navigator?.dispatch(CommonActions.goBack());
}

//open drawer from specific places
function openDrawer() {
    _navigator?.dispatch(DrawerActions.openDrawer());
}

//reset current stack to a certain screen 
function reset(routeName: string, params?: object) {
    const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }]
    })
    _navigator?.dispatch(resetAction);
}

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    openDrawer,
    reset
};
