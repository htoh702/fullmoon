"use client";
import React, { useState, useEffect } from "react";
import fetchAllCoffees from './utils/fetchAllCoffees';
import searchCoffee from './utils/searchCoffee';
import styles from './SearchBar.module.css';
import {
    Card,
    CardFooter,
    Image,
    CardBody,
    Button,
    Input,
} from "@nextui-org/react";

const CoffeeList = ({ handleCoffeeItemClick }) => {
    const [coffees, setCoffees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleClick = (coffeeId) => {
        handleCoffeeItemClick(coffeeId);
    };
  
    useEffect(() => {
        const getCoffees = async () => {
            const coffeeData = await fetchAllCoffees();
            setCoffees(coffeeData);
            console.log(coffees);
        };
  
      if(searchTerm.length == 0 && coffees.length == 0) {getCoffees();}
      else {handleSearch();}
    }, []);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSearch = async () => {
        console.log('search');
        console.log(searchTerm);
        const coffeeData = await searchCoffee(searchTerm);
        setCoffees([coffeeData]);
    };
  
    return (
        <div>
            <div className={styles.searchForm}>
                <Input clearable bordered width="70%"
                    type="text"
                    placeholder="검색어 입력하세요."
                    value={searchTerm}
                    onChange={handleChange}
                    className={styles.searchInput}
                />
                <Button auto onClick={handleSearch} className={styles.searchButton}>
                    검색
                </Button>
            </div>
            <div className="gap-10 grid grid-cols-2 sm:grid-cols-3">
                {coffees.map(coffee => (
                    <Card
                        shadow="sm"
                        key={coffee.id}
                        isPressable
                        onClick={() => handleClick(coffee.id)}
                    >
                        <CardBody className="overflow-visible p-0 addButton">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={coffee.modelName}
                                className="w-full object-cover h-[200px]"
                                src={coffee.imageUrl}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-center">
                            <b>{coffee.modelName}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default CoffeeList;
