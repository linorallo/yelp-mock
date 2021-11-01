import { PermissionsAndroid, Platform } from "react-native"

export const checkLocationPermission = async () => {
    if (Platform.OS === 'android') {
        const permissionGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        if (permissionGranted) {
            return true
        } else {
            return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        }
    }
}
