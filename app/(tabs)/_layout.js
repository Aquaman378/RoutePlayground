import { Tabs } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function TabLayout(){
    return (
        <>

            <Tabs
                //screenOptions={{
                    //headerShown: false
               // }}
            >
                <Tabs.Screen name="Profile" options={{ title: 'Profile' }} />
                <Tabs.Screen name="Tab_1" options={{ title: 'Tab_1' }} />
                <Tabs.Screen name="Tab_3" options={{ title: 'Tab_3' }} />
            </Tabs>*/
            <Drawer>
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }} />
                <Drawer.Screen
                    name="user/[id]" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'User',
                        title: 'overview',
                    }} />
            </Drawer>
        </>
    );
}