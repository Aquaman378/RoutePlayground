import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile" // This links to the (tabs) group
        options={{
          drawerLabel: 'Main Tabs',
          title: 'Profile',
          headerShown: false, // This hides the header on the tab screen
        }}
      />
      <Drawer.Screen
        name="Tab_1"
        options={{
          drawerLabel: 'Main Tabs',
          title: 'Tab_1',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Tab_3"
        options={{
          drawerLabel: 'Main Tabs',
          title: 'Tab_3',
          headerShown: false, 
        }}
      />
    </Drawer>
  );
}