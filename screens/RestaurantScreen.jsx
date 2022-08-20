import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    StarIcon
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {

    const navigation = useNavigation();

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <ScrollView>
            <View className='relative'>
                <Image source={{
                    uri: urlFor(imgUrl).url(),

                }}
                    className='w-full h-56 bg-gray-300 p-4'
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
                >
                    <ArrowLeftIcon size={20} color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='text-3xl font-bold'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'>
                            <StarIcon color='green' opacity={0.5} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-green-400'>{rating}</Text> • {genre}
                            </Text>
                        </View>

                        <View className='flex-row items-center space-x-1'>
                            <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
                            <Text className='text-xs text-gray-500'>
                                <Text className='text-gray-500'>Nearby</Text> • {address}
                            </Text>
                        </View>
                    </View>

                    <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
                </View>

                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                    <Text className='pl-2 flex-1 text-md font-bold'>
                        Have a food alergy?
                    </Text>
                    <ChevronRightIcon color='green' />
                </TouchableOpacity>
            </View>

            <View>
                <Text className='px-4 pt-6 text-xl font-bold '>Menu</Text>

                {/* Dish Row */}
                {dishes.map((dish) => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen