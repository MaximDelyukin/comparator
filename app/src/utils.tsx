import React from "react";

export const defaultImgSrc: string = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNDUwcHgiIHZpZXdCb3g9IjAgMCA2MDAgNDUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MDAgNDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiM0NTQ1NDUiIGQ9Ik01Ny4xNSwxOTEuNzY1di04My41NzFoMTEuNzc5bDI2Ljc4Myw0Mi4yODJjNi4yLDkuNzk1LDExLjAzNSwxOC41OTksMTUuMDAzLDI3LjE1NGwwLjI0OC0wLjEyNA0KCQljLTAuOTkyLTExLjE1OS0xLjI0LTIxLjMyNy0xLjI0LTM0LjM0NnYtMzQuOTY2aDEwLjE2N3Y4My41NzFoLTEwLjkxMkw4Mi40NDUsMTQ5LjM2Yy01LjgyOC05LjI5OS0xMS40MDgtMTguODQ3LTE1LjYyNC0yNy44OTgNCgkJbC0wLjM3MiwwLjEyNGMwLjYyLDEwLjU0LDAuODY4LDIwLjU4MywwLjg2OCwzNC40N3YzNS43MUw1Ny4xNSwxOTEuNzY1TDU3LjE1LDE5MS43NjV6Ii8+DQoJPHBhdGggZmlsbD0iIzQ1NDU0NSIgZD0iTTE5Mi42NzgsMTYxLjI2M2MwLDIyLjE5NS0xNS4zNzUsMzEuODY2LTI5Ljg4MiwzMS44NjZjLTE2LjI0MywwLTI4Ljc2Ni0xMS45MDMtMjguNzY2LTMwLjg3NA0KCQljMC0yMC4wODcsMTMuMTQzLTMxLjg2NiwyOS43NTgtMzEuODY2QzE4MS4wMjMsMTMwLjM4OSwxOTIuNjc4LDE0Mi45MTIsMTkyLjY3OCwxNjEuMjYzeiBNMTQ1LjA2NSwxNjEuODgzDQoJCWMwLDEzLjE0Myw3LjU2MywyMy4wNjIsMTguMjI3LDIzLjA2MmMxMC40MTYsMCwxOC4yMjctOS43OTUsMTguMjI3LTIzLjMxMWMwLTEwLjE2Ny01LjA4NC0yMy4wNjItMTcuOTc5LTIzLjA2Mg0KCQlDMTUwLjY0NCwxMzguNTczLDE0NS4wNjUsMTUwLjQ3NiwxNDUuMDY1LDE2MS44ODN6Ii8+DQoJPHBhdGggZmlsbD0iIzQ1NDU0NSIgZD0iTTI0NC44ODMsMTE0Ljg5YzAuMTI0LDMuNzItMi42MDQsNi42OTUtNi45NDMsNi42OTVjLTMuODQ0LDAtNi41NzItMi45NzYtNi41NzItNi42OTUNCgkJYzAtMy44NDQsMi44NTItNi44Miw2LjgyLTYuODJDMjQyLjI3OSwxMDguMDcsMjQ0Ljg4MywxMTEuMDQ2LDI0NC44ODMsMTE0Ljg5eiBNMjMyLjczMSwxOTEuNzY1di02MC4wMTNoMTAuOTEydjYwLjAxM0gyMzIuNzMxeiINCgkJLz4NCgk8cGF0aCBmaWxsPSIjNDU0NTQ1IiBkPSJNMjYxLjc0NiwxNDcuOTk2YzAtNi4yLTAuMTI0LTExLjI4My0wLjQ5Ni0xNi4yNDNoOS41NDdsMC40OTYsOS42NzFoMC4zNzINCgkJYzMuMzQ4LTUuNzA0LDguOTI4LTExLjAzNSwxOC44NDctMTEuMDM1YzguMTg0LDAsMTQuMzg0LDQuOTU5LDE2Ljk4NywxMi4wMjdoMC4yNDhjMS44NTktMy4zNDgsNC4yMTYtNS45NTIsNi42OTUtNy44MTINCgkJYzMuNTk2LTIuNzI4LDcuNTYzLTQuMjE2LDEzLjI2OC00LjIxNmM3LjkzNiwwLDE5LjcxNSw1LjIwOCwxOS43MTUsMjYuMDM5djM1LjMzOGgtMTAuNjYzdi0zMy45NzQNCgkJYzAtMTEuNTMxLTQuMjE2LTE4LjQ3NS0xMy4wMi0xOC40NzVjLTYuMiwwLTExLjAzNSw0LjU4OC0xMi44OTYsOS45MTljLTAuNDk2LDEuNDg4LTAuODY4LDMuNDcyLTAuODY4LDUuNDU2djM3LjA3NGgtMTAuNjY0DQoJCXYtMzUuOTU4YzAtOS41NDctNC4yMTUtMTYuNDkxLTEyLjUyMy0xNi40OTFjLTYuODIsMC0xMS43NzksNS40NTYtMTMuNTE1LDEwLjkxMmMtMC42MiwxLjYxMi0wLjg2OCwzLjQ3Mi0wLjg2OCw1LjMzMnYzNi4yMDYNCgkJaC0xMC42NjR2LTQzLjc3SDI2MS43NDZ6Ii8+DQoJPHBhdGggZmlsbD0iIzQ1NDU0NSIgZD0iTTM5OC4zOTMsMTkxLjc2NWwtMC44NjgtNy41NjNoLTAuMzcyYy0zLjM0OCw0LjcxMS05Ljc5NSw4LjkyNy0xOC4zNTEsOC45MjcNCgkJYy0xMi4xNTEsMC0xOC4zNTEtOC41NTUtMTguMzUxLTE3LjIzNWMwLTE0LjUwNywxMi44OTUtMjIuNDQzLDM2LjA4Mi0yMi4zMTl2LTEuMjRjMC00Ljk2LTEuMzY0LTEzLjg4Ny0xMy42NC0xMy44ODcNCgkJYy01LjU4LDAtMTEuNDA3LDEuNzM2LTE1LjYyMyw0LjQ2NGwtMi40NzktNy4xOTJjNC45NTktMy4yMjQsMTIuMTUxLTUuMzMyLDE5LjcxNS01LjMzMmMxOC4zNTEsMCwyMi44MTQsMTIuNTIzLDIyLjgxNCwyNC41NTENCgkJdjIyLjQ0MmMwLDUuMjA4LDAuMjQ4LDEwLjI5MiwwLjk5MiwxNC4zODNoLTkuOTE5VjE5MS43NjV6IE0zOTYuNzgxLDE2MS4xMzljLTExLjkwMy0wLjI0OC0yNS40MTksMS44Ni0yNS40MTksMTMuNTE2DQoJCWMwLDcuMDY3LDQuNzEyLDEwLjQxNSwxMC4yOTEsMTAuNDE1YzcuODEyLDAsMTIuNzcxLTQuOTU5LDE0LjUwOC0xMC4wNDNjMC4zNzItMS4xMTYsMC42Mi0yLjM1NSwwLjYyLTMuNDcyVjE2MS4xMzl6Ii8+DQoJPHBhdGggZmlsbD0iIzQ1NDU0NSIgZD0iTTQ3Ni42MzUsMTMxLjc1M2MtMC4yNDgsNC4zNC0wLjQ5Niw5LjE3Ni0wLjQ5NiwxNi40OTF2MzQuODQyYzAsMTMuNzYzLTIuNzI4LDIyLjE5NS04LjU1NiwyNy40MDMNCgkJYy01LjgyNyw1LjQ1Ni0xNC4yNTksNy4xOTEtMjEuODIyLDcuMTkxYy03LjE5MSwwLTE1LjEyNy0xLjczNi0xOS45NjMtNC45NmwyLjcyOC04LjMwN2MzLjk2OCwyLjQ3OSwxMC4xNjgsNC43MTEsMTcuNjA3LDQuNzExDQoJCWMxMS4xNTksMCwxOS4zNDMtNS44MjgsMTkuMzQzLTIwLjk1NXYtNi42OTZoLTAuMjQ4Yy0zLjM0OCw1LjU4LTkuNzk2LDEwLjA0My0xOS4wOTUsMTAuMDQzYy0xNC44OCwwLTI1LjU0My0xMi42NDctMjUuNTQzLTI5LjI2Mg0KCQljMC0yMC4zMzUsMTMuMjY4LTMxLjg2NiwyNy4wMy0zMS44NjZjMTAuNDE2LDAsMTYuMTE5LDUuNDU2LDE4LjcyNCwxMC40MTZoMC4yNDhsMC40OTYtOS4wNTJoOS41NDdWMTMxLjc1M3ogTTQ2NS4zNTIsMTU1LjQzNQ0KCQljMC0xLjg2LTAuMTI0LTMuNDcyLTAuNjItNC45NTljLTEuOTgzLTYuMzI0LTcuMzE1LTExLjUzMS0xNS4yNTEtMTEuNTMxYy0xMC40MTYsMC0xNy44NTUsOC44MDMtMTcuODU1LDIyLjY5DQoJCWMwLDExLjc3OSw1Ljk1MiwyMS41NzUsMTcuNzMxLDIxLjU3NWM2LjY5NSwwLDEyLjc3MS00LjIxNiwxNS4xMjctMTEuMTU5YzAuNjItMS44NiwwLjg2OC0zLjk2OCwwLjg2OC01LjgyOFYxNTUuNDM1eiIvPg0KCTxwYXRoIGZpbGw9IiM0NTQ1NDUiIGQ9Ik01MDAuMzIxLDE2My43NDNjMC4yNDgsMTQuNzU1LDkuNjcyLDIwLjgzMSwyMC41ODMsMjAuODMxYzcuODEyLDAsMTIuNTIzLTEuMzY0LDE2LjYxNS0zLjFsMS44NTksNy44MTINCgkJYy0zLjg0NCwxLjczNi0xMC40MTUsMy43Mi0xOS45NjMsMy43MmMtMTguNDc1LDAtMjkuNTEtMTIuMTUxLTI5LjUxLTMwLjI1NHMxMC42NjMtMzIuMzYyLDI4LjE0Ni0zMi4zNjINCgkJYzE5LjU5MSwwLDI0Ljc5OCwxNy4yMzUsMjQuNzk4LDI4LjI3MWMwLDIuMjMyLTAuMjQ3LDMuOTY4LTAuMzcxLDUuMDgzTDUwMC4zMjEsMTYzLjc0M0w1MDAuMzIxLDE2My43NDN6IE01MzIuMzExLDE1NS45MzENCgkJYzAuMTI0LTYuOTQzLTIuODUyLTE3LjczMS0xNS4xMjctMTcuNzMxYy0xMS4wMzUsMC0xNS44NzEsMTAuMTY3LTE2LjczOSwxNy43MzFINTMyLjMxMXoiLz4NCgk8cGF0aCBmaWxsPSIjNDU0NTQ1IiBkPSJNMTEwLjk2NSwzNDAuNTY2bC0wLjg2OC03LjU2M2gtMC4zNzJjLTMuMzQ4LDQuNzEyLTkuNzk1LDguOTI4LTE4LjM1MSw4LjkyOA0KCQljLTEyLjE1MSwwLTE4LjM1MS04LjU1Ni0xOC4zNTEtMTcuMjM1YzAtMTQuNTA3LDEyLjg5NS0yMi40NDIsMzYuMDgyLTIyLjMxOHYtMS4yNGMwLTQuOTYtMS4zNjQtMTMuODg4LTEzLjY0LTEzLjg4OA0KCQljLTUuNTgsMC0xMS40MDcsMS43MzYtMTUuNjIzLDQuNDY0bC0yLjQ3OS03LjE5MWM0Ljk1OS0zLjIyNCwxMi4xNTEtNS4zMzIsMTkuNzE1LTUuMzMyYzE4LjM1MSwwLDIyLjgxNCwxMi41MjMsMjIuODE0LDI0LjU1MQ0KCQl2MjIuNDQzYzAsNS4yMDcsMC4yNDgsMTAuMjkxLDAuOTkyLDE0LjM4M2gtOS45MTlWMzQwLjU2NnogTTEwOS4zNTMsMzA5Ljk0Yy0xMS45MDMtMC4yNDgtMjUuNDE5LDEuODU5LTI1LjQxOSwxMy41MTUNCgkJYzAsNy4wNjgsNC43MTIsMTAuNDE2LDEwLjI5MiwxMC40MTZjNy44MTIsMCwxMi43NzEtNC45NiwxNC41MDctMTAuMDQ0YzAuMzcyLTEuMTE2LDAuNjItMi4zNTUsMC42Mi0zLjQ3Mg0KCQlDMTA5LjM1MywzMjAuMzU1LDEwOS4zNTMsMzA5Ljk0LDEwOS4zNTMsMzA5Ljk0eiIvPg0KCTxwYXRoIGZpbGw9IiM0NTQ1NDUiIGQ9Ik0xNDAuNzI2LDI4MC41NTNsMTEuNzc5LDMzLjcyN2MxLjk4NCw1LjQ1NSwzLjU5NiwxMC40MTUsNC44MzYsMTUuMzc1aDAuMzcyDQoJCWMxLjM2NC00Ljk2LDMuMS05LjkyLDUuMDgzLTE1LjM3NWwxMS42NTUtMzMuNzI3aDExLjQwOEwxNjIuMywzNDAuNTY2aC0xMC40MTVsLTIyLjgxNS02MC4wMTNIMTQwLjcyNnoiLz4NCgk8cGF0aCBmaWxsPSIjNDU0NTQ1IiBkPSJNMjI4Ljg4OCwzNDAuNTY2bC0wLjg2OC03LjU2M2gtMC4zNzJjLTMuMzQ4LDQuNzEyLTkuNzk1LDguOTI4LTE4LjM1MSw4LjkyOA0KCQljLTEyLjE1MSwwLTE4LjM1MS04LjU1Ni0xOC4zNTEtMTcuMjM1YzAtMTQuNTA3LDEyLjg5NS0yMi40NDIsMzYuMDgyLTIyLjMxOHYtMS4yNGMwLTQuOTYtMS4zNjQtMTMuODg4LTEzLjY0LTEzLjg4OA0KCQljLTUuNTgsMC0xMS40MDcsMS43MzYtMTUuNjIzLDQuNDY0bC0yLjQ3OS03LjE5MWM0Ljk1OS0zLjIyNCwxMi4xNTEtNS4zMzIsMTkuNzE1LTUuMzMyYzE4LjM1MSwwLDIyLjgxNCwxMi41MjMsMjIuODE0LDI0LjU1MQ0KCQl2MjIuNDQzYzAsNS4yMDcsMC4yNDgsMTAuMjkxLDAuOTkyLDE0LjM4M2gtOS45MTlWMzQwLjU2NnogTTIyNy4yNzYsMzA5Ljk0Yy0xMS45MDMtMC4yNDgtMjUuNDE5LDEuODU5LTI1LjQxOSwxMy41MTUNCgkJYzAsNy4wNjgsNC43MTIsMTAuNDE2LDEwLjI5MiwxMC40MTZjNy44MTIsMCwxMi43NzEtNC45NiwxNC41MDctMTAuMDQ0YzAuMzcyLTEuMTE2LDAuNjItMi4zNTUsMC42Mi0zLjQ3MkwyMjcuMjc2LDMwOS45NA0KCQlMMjI3LjI3NiwzMDkuOTR6Ii8+DQoJPHBhdGggZmlsbD0iIzQ1NDU0NSIgZD0iTTI2Ny41NzYsMjYzLjY5YzAuMTI0LDMuNzItMi42MDQsNi42OTYtNi45NDMsNi42OTZjLTMuODQ0LDAtNi41NzItMi45NzctNi41NzItNi42OTYNCgkJYzAtMy44NDQsMi44NTItNi44MTksNi44Mi02LjgxOUMyNjQuOTcyLDI1Ni44NywyNjcuNTc2LDI1OS44NDYsMjY3LjU3NiwyNjMuNjl6IE0yNTUuNDI1LDM0MC41NjZ2LTYwLjAxM2gxMC45MTJ2NjAuMDEzSDI1NS40MjV6DQoJCSIvPg0KCTxwYXRoIGZpbGw9IiM0NTQ1NDUiIGQ9Ik0yODQuNDQsMjUyLjUzMWgxMC45MTJ2ODguMDM1SDI4NC40NFYyNTIuNTMxeiIvPg0KCTxwYXRoIGZpbGw9IiM0NTQ1NDUiIGQ9Ik0zNDYuOTM0LDM0MC41NjZsLTAuODY4LTcuNTYzaC0wLjM3MmMtMy4zNDgsNC43MTItOS43OTYsOC45MjgtMTguMzUxLDguOTI4DQoJCWMtMTIuMTUxLDAtMTguMzUyLTguNTU2LTE4LjM1Mi0xNy4yMzVjMC0xNC41MDcsMTIuODk2LTIyLjQ0MiwzNi4wODItMjIuMzE4di0xLjI0YzAtNC45Ni0xLjM2NC0xMy44ODgtMTMuNjM5LTEzLjg4OA0KCQljLTUuNTgsMC0xMS40MDgsMS43MzYtMTUuNjI0LDQuNDY0bC0yLjQ3OS03LjE5MWM0Ljk2LTMuMjI0LDEyLjE1MS01LjMzMiwxOS43MTUtNS4zMzJjMTguMzUxLDAsMjIuODE0LDEyLjUyMywyMi44MTQsMjQuNTUxDQoJCXYyMi40NDNjMCw1LjIwNywwLjI0OCwxMC4yOTEsMC45OTIsMTQuMzgzaC05LjkxOFYzNDAuNTY2eiBNMzQ1LjMyMiwzMDkuOTRjLTExLjkwMy0wLjI0OC0yNS40MTksMS44NTktMjUuNDE5LDEzLjUxNQ0KCQljMCw3LjA2OCw0LjcxMiwxMC40MTYsMTAuMjkyLDEwLjQxNmM3LjgxMiwwLDEyLjc3MS00Ljk2LDE0LjUwNy0xMC4wNDRjMC4zNzItMS4xMTYsMC42Mi0yLjM1NSwwLjYyLTMuNDcyTDM0NS4zMjIsMzA5Ljk0DQoJCUwzNDUuMzIyLDMwOS45NHoiLz4NCgk8cGF0aCBmaWxsPSIjNDU0NTQ1IiBkPSJNMzcyLjk3NSwzNDAuNTY2YzAuMjQ4LTQuMDkyLDAuNDk1LTEwLjE2NywwLjQ5NS0xNS40OTl2LTcyLjUzNmgxMC43ODh2MzcuNjk0aDAuMjQ4DQoJCWMzLjg0NC02LjY5NiwxMC43ODctMTEuMDM2LDIwLjQ1OS0xMS4wMzZjMTQuODc5LDAsMjUuNDE4LDEyLjM5OSwyNS4yOTQsMzAuNjI3YzAsMjEuNDUtMTMuNTE1LDMyLjExNC0yNi45MDYsMzIuMTE0DQoJCWMtOC42OCwwLTE1LjYyMy0zLjM0OS0yMC4wODctMTEuMjg0aC0wLjM3MmwtMC40OTYsOS45MkgzNzIuOTc1eiBNMzg0LjI1OCwzMTYuNTExYzAsMS4zNjQsMC4yNDgsMi43MjgsMC40OTYsMy45NjgNCgkJYzIuMTA3LDcuNTYzLDguNDMyLDEyLjc3MSwxNi4zNjcsMTIuNzcxYzExLjQwNywwLDE4LjIyNy05LjMsMTguMjI3LTIzLjA2MmMwLTEyLjAyNy02LjItMjIuMzE5LTE3Ljg1NS0yMi4zMTkNCgkJYy03LjQzOSwwLTE0LjM4Myw1LjA4NC0xNi42MTQsMTMuMzkyYy0wLjI0OCwxLjI0LTAuNjIsMi43MjgtMC42Miw0LjQ2NEwzODQuMjU4LDMxNi41MTFMMzg0LjI1OCwzMTYuNTExeiIvPg0KCTxwYXRoIGZpbGw9IiM0NTQ1NDUiIGQ9Ik00NDQuMDI1LDI1Mi41MzFoMTAuOTExdjg4LjAzNWgtMTAuOTExVjI1Mi41MzF6Ii8+DQoJPHBhdGggZmlsbD0iIzQ1NDU0NSIgZD0iTTQ3OS4zNjQsMzEyLjU0M2MwLjI0OCwxNC43NTUsOS42NzIsMjAuODMxLDIwLjU4MywyMC44MzFjNy44MTIsMCwxMi41MjMtMS4zNjQsMTYuNjE1LTMuMWwxLjg1OSw3LjgxMg0KCQljLTMuODQ0LDEuNzM1LTEwLjQxNSwzLjcyLTE5Ljk2MywzLjcyYy0xOC40NzUsMC0yOS41MS0xMi4xNTEtMjkuNTEtMzAuMjU1YzAtMTguMTAzLDEwLjY2My0zMi4zNjIsMjguMTQ2LTMyLjM2Mg0KCQljMTkuNTkxLDAsMjQuNzk4LDE3LjIzNSwyNC43OTgsMjguMjcxYzAsMi4yMzItMC4yNDcsMy45NjgtMC4zNzEsNS4wODRoLTQyLjE1N1YzMTIuNTQzeiBNNTExLjM1NCwzMDQuNzMyDQoJCWMwLjEyNC02Ljk0My0yLjg1Mi0xNy43My0xNS4xMjctMTcuNzNjLTExLjAzNSwwLTE1Ljg3MSwxMC4xNjctMTYuNzM5LDE3LjczSDUxMS4zNTR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';

export const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const noImgUrl = defaultImgSrc;
    e.currentTarget.src = noImgUrl;
    e.currentTarget.alt = 'No image available';
}

export const CONSTANTS = {
    PRODUCTS_API_URL: 'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all',
    ID_KEY: 'sku',
    FEATURES: [
        'Toepassing',
        'Hardheid',
        'Artikelnummer',
        'stepQuantity',
        'Kleur',
        'Temperatuurgebied',
        'Materiaal',
        'Snoerdikte',
        'Inwendige diameter',
        'Maat volgens AS568'
    ]
};

export const getSortedFeatures = (featureSource: string[]) => {
    return featureSource.sort();
};

export const getFieldsWhichAreDifferent = (source: any[]) => {
    let res: any[] = [];
    if (source.length === 0) {
        return res;
    }

    const sampleItem = source[0];

    const fieldNames = Object.keys(sampleItem);

    const groupedByFieldNameStore: any = {};

    fieldNames.forEach((fieldName: string) => {
        groupedByFieldNameStore[fieldName] = [];
        return;
    });
    
    source.forEach((product: any) => {
        for (let i in product) {
            if (product.hasOwnProperty(i)) {
                groupedByFieldNameStore[i].push(product[i]);
            }
        };
    } );

    const storeOfDifferentFields: string[] = [];

    const checkForDifference = (source: string[]) => {
        const sample = source[0];
        const res = source.filter((item: string) => {
            return item !== sample;
        } );

        return res.length > 0;
    }

    for (let i in groupedByFieldNameStore) {
        if (groupedByFieldNameStore.hasOwnProperty(i)) {
            if (checkForDifference(groupedByFieldNameStore[i])) {
                storeOfDifferentFields.push(i);
            }
        }
    };

    res = storeOfDifferentFields;
    
    return res;
};

export const getDetailedItemsList = (items: any[], selectedItems: any[]) => {
    return items.filter((item: any) => {
        return selectedItems.indexOf(item[CONSTANTS.ID_KEY]) !== -1;
    } );
};