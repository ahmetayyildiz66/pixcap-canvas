# pixcap-canvas

## What I've used
* Vue 3
* Composition API
* Canvas(Konva)
* TypeScript
* SCSS

## How did I implement it?
* I did NOT copy the previous state while doing **Undo/Redo**, I stored the command with its arguments(**id**, **supervisorId**, **parentId**, and **subordinates**) for example:
![Screenshot 2023-04-28 at 05 03 02](https://user-images.githubusercontent.com/19995632/235044562-bb166dec-6b7e-44b4-99ee-dce579b8466b.png)

* I iterated over the nested object by using a **while** loop because recursion has some performance issues

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

# Folder structure

## src/interfaces/Employee.ts
<img width="655" alt="Screenshot 2023-04-26 at 15 28 41" src="https://user-images.githubusercontent.com/19995632/234590525-d792da9e-170d-4f5a-b071-12ee2d6d28df.png">

## src/interfaces/IEmployeeOrgApp.ts
<img width="1073" alt="Screenshot 2023-04-26 at 15 29 03" src="https://user-images.githubusercontent.com/19995632/234590617-92eda0ad-e6ec-4ef1-8a6f-2db8060eefb0.png">

## src/data/ceo.ts
<img width="1028" alt="Screenshot 2023-04-26 at 15 31 26" src="https://user-images.githubusercontent.com/19995632/234591390-c1e8a47c-9d85-49ce-bb14-6009e1d90e0a.png">



## src/concrete/EmployeeOrgApp.ts
<img width="1137" alt="Screenshot 2023-04-26 at 15 29 50" src="https://user-images.githubusercontent.com/19995632/234590932-9671fbda-ac26-4f6e-93cf-d91d46171066.png">


## src/components/PixcapUndoRedo.vue

#### It's the place initializes the EmployeeOrgStructure
<img width="1269" alt="Screenshot 2023-04-26 at 15 30 14" src="https://user-images.githubusercontent.com/19995632/234591052-b9d028c9-d6fd-44dd-991a-a3b7ce5855b2.png">
