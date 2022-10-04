<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
        <img src="../assets/logo.svg" alt="vue">
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
    </div>
    <div class="menu">
        <router-link class="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/books">
            <span class="material-icons">menu_book</span>
            <span class="text">Books</span>
        </router-link>
        <router-link class="button" to="/about">
            <span class="material-icons">group</span>
            <span class="text">About</span>
        </router-link>
        <router-link class="button" to="/events">
            <span class="material-icons">event_available</span>
            <span class="text">Events</span>
        </router-link>
        <router-link class="button" to="/buy">
            <span class="material-icons">shopping_cart</span>
            <span class="text">Buy</span>
        </router-link>
        <router-link class="button" to="/contact">
            <span class="material-icons">contacts</span>
            <span class="text">Contact</span>
        </router-link>
    </div>
  </aside>
</template>

<script setup>
    import {ref} from 'vue'
    
    const is_expanded = ref(false)

    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value
    }
</script>

<style lang="scss" scoped>
    aside{
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        overflow: hidden;
        min-height: 100vh;
        padding: 01rem;
        background-image:url(../assets/img/header_backround_org.png);
        color:var(--light);

        transition: 0.2s ease-out;

        .logo{
            margin-bottom: 1rem;

            img{
                width: 2rem;
            }
        }
        .menu-toggle-wrap{
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
            position: relative;
            top: 0;
            transition: 0.2s ease-out;
            .menu-toggle{
                transition: 0.2s ease-out;

                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                }

                &:hover{
                    .material-icons{
                        color: var(--primary);
                        transform: translateX(0.5rem);
                        transition: 0.2s ease-out;
                    }
                }
            }
        }

        .button .text{
            opacity: 0;
            transition: 0.3s ease-out;
        }
        .menu{
            margin: auto -1rem;
            .button{
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;
                .material-icons{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
                }

                .text{
                    color: var(--light);
                    transition: 0.2s ease-out;
                }
                &:hover{
                    background-color: rgba(0, 0, 0, 0.603);
                    .material-icons, .text{
                        color: var(--primary);
                    }
                }
            }
            
        }

        &.is-expanded{
            width: var(--sidebar-width);

            .menu-toggle-wrap{
                top: -3rem;

                .menu-toggle{
                    transform: rotate(-180deg);
                }
            }

            .button .text{
                opacity: 1;
            }
            .button{
                .material-icons{
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width:768px){
            position: fixed;
            z-index: 99;
        }
    }
</style>