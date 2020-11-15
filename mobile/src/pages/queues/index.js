import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Queues() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Você está em <Text style={styles.headerBoldText}>0 filas</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Divirta-se!</Text>
            <Text style={styles.description}>Aqui estão as filas em que você entrou, não se atrase!</Text>

        
            <FlatList
                style={styles.queueList} 
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={queue => String(queue)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.queue}>
                        <Text style={styles.queueProperty}>Sua vez:</Text>
                        <Text style={styles.queueValueBold}>10 minutos</Text>

                        <Text style={styles.queueProperty}>Brinquedo:</Text>
                        <Text style={styles.queueValue}>Rollercoaster</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>Ver detalhes e opções</Text>
                            <Feather name="arrow-right" size={16} color="#BF3434"></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};