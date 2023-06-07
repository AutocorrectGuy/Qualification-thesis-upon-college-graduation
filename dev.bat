@echo off

:: Runs backend
start cmd /k "cd backend && nodemon index.ts"

:: Runs frontend
start cmd /k "cd frontend && start dev"