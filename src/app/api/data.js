import MembersIcon from '@/components/assets/img/members.png'
import ExecutivesIcon from '@/components/assets/img/executives.png'
import DepartmentIcon from '@/components/assets/img/Department.png'


export const admins = [
    {
        "id": 1,
        "type": "senior manager",
        "username": "supadmin",
        "password": "supa123",
    },
    {
        "id": 2,
        "type": "junior manager",
        "username": "admin",
        "password": "admin123",
    },
]

export const membersDB = [
    {
        "id": 1,
        "password": "pensa1234",
        "isLogedin": true,
        "firstname": "Meshack",
        "lastname": "Commey",
        "othername": "MeshCom",
        "gender": "Male",
        "email": "meshack@gmail.com",
        "personal_phone": "0275534543",
        "program": "B.Sc. Computer Science",
        "level": "400",
        "residence": "Tech Hostel",
        "room_number": "T8",
        "membership_type": "Associate",
        "church_district": "Ga South",
        "church_area": "Weija",
        "department": "Organizing Department",
        "interests": "programming",
        "health_condition": "none",
        "parent_firstname": "David",
        "parent_lastname": "MeshCom",
        "parent_phone": "0565879547",
        "home_address": "Accra",
    }
]

export const executivesDB = [
    {
        "id": 1,
        "password": "pensa1234",
        "isLogedin": true,
        "firstname": "Saviour",
        "lastname": "Doku",
        "othername": "Narh",
        "gender": "Male",
        "email": "saviourdoku@gmail.com",
        "personal_phone": "0546406319",
        "program": "B.Sc. Computer Science",
        "level": "400",
        "residence": "Amerley Hostel",
        "room_number": "2A",
        "membership_type": "Pentecost Member",
        "church_district": "Ningo South",
        "church_area": "Ningo",
        "department": "Media Department",
        "interests": "Graphic Design",
        "health_condition": "none",
        "parent_firstname": "Davis",
        "parent_lastname": "Doku",
        "parent_phone": "0245879547",
        "home_address": "Ningo",
    }
]

export const departmentDB = [
    {
        "id": 1,
    }
]

export const alumniDB = [
    {
        "id": 1,
    }
]


export const dashboardStates = [
    {
        "name": "Members",
        "value": membersDB.length,
        "icon": MembersIcon,
    },
    {
      "name": "Executives",
      "value": executivesDB.length,
      "icon": ExecutivesIcon,
    },
    {
        "name": "Admins",
        "value": admins.length,
        "icon": MembersIcon,
      },
    {
        "name": "Department",
        "value": departmentDB.length,
        "icon": DepartmentIcon,
    },
    {
        "name": "Alumni",
        "value": alumniDB.length,
        "icon": ExecutivesIcon,
    },
  ]