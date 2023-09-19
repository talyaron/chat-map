import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const user = {
    name: '🌟 Alice Johnson 🌟',
    email: 'alice@example.com',
    profilePicture:
        'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.webp',
    icons: '📚 Bookworm | ☕ Coffee Lover | ✈️ Adventure Seeker',
    bio: ' Hi there! I am Alice, a passionate bookworm who spends her days lost in the pages of novels from all around the world. When I am not curled up with a good book and a cup of coffee, you can find me planning my next adventure to far-off places. I believe in living life to the fullest and embracing every opportunity that comes my way. Let us explore the world together, one chapter at a time! 🌍📖☕',
};

const Profile = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{ uri: user.profilePicture }}
                    style={styles.profilePicture}
                />
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.bio}>{user.icons}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
        padding: 20,
        // justifyContent: 'space-around',
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
    },
    bio: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default Profile;
