import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    function navigateBack() {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                
                <TouchableOpacity style={styles.headerBackButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#CC1C00"/>
                </TouchableOpacity>
            </View>

            <View style={styles.queue}>
                <Text style={[styles.queueProperty, { marginTop: 0 }]}>Sua vez:</Text>
                <Text style={styles.queueValue}>Faltam <Text style={styles.queueValueBold}>10 minutos</Text>.</Text>

                <Text style={styles.queueProperty}>Brinquedo:</Text>
                <Text style={styles.queueValue}>Rollercoaster</Text>
            </View>

            <View style={styles.optionsBox}>
                <Text style={styles.optionsBoxTitle}>Mudou de idéia?</Text>
                <Text style={styles.optionsBoxDescription}>
                    Desde que sua vez não esteja muito perto, você pode sair da fila quando quiser!
                </Text>

                <View style={styles.action}>
                    <TouchableOpacity onPress={()=>{}} style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};