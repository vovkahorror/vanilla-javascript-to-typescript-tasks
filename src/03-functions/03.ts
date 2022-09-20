import {StudentType} from "../02-objects/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02-objects/02_02";
import exp from "constants";

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  })
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
  return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
}

export const toFireStaff = (buildings: GovernmentBuildingsType, staffCountToFire: number) => {
  buildings.staffCount -= staffCountToFire;
}

export const toHireStaff = (buildings: GovernmentBuildingsType, staffCountToHire: number) => {
  buildings.staffCount += staffCountToHire;
}

export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. I want to you be happy. All ${city.citizensNumber} people.`
}