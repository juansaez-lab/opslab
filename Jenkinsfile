pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker compose -f deploy/docker-compose.yml build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose -f deploy/docker-compose.yml up -d'
            }
        }

        stage('Validate') {
            steps {
                sh 'curl -f http://localhost'
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully.'
        }

        failure {
            echo 'Deployment failed.'
        }
    }
}
