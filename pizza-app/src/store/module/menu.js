const state = {
    // 设置属性
    menuItems:{}
}

const getters = {
    getMenuItems : state => state.menuItems
}

const mutations = {
    // 改变属性的状态
    setMenuItems(state, data){
        state.menuItems = data;
    },
    // 将匹配到对象,在menuItem数组中删除
    removeMenuItems(state, data){
        state.menuItems.forEach((item, index) => {
            if(item == data){
                state.menuItems.splice(index, 1);
            }
        });
    },
    // 将新添加的pizza Push到MenuItems属性中
    pushToMenuItems(state, data){
        state.menuItems.push(data)
    },
}

const actions = {
    
}

export default{
    state,
    getters,
    mutations,
    actions
}